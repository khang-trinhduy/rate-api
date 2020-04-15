var { contacts } = require("../models/contact");
const sgMail = require("@sendgrid/mail");
const format = require("date-format");

exports.subscribe = async (req, res, next) => {
  try {
    var result = await contacts.findOneAndUpdate(
      {
        $or: [{ email: req.body.email }, { phone: req.body.phone }],
      },
      req.body,
      { upsert: true, new: true }
    );
    let subject = result.email === undefined
      ? "Đăng ký tư vấn lãi suất"
      : "Đăng ký cập nhật thông tin lãi suất";
    let content = result.email === undefined
      ? `Dear duyen.dang, hau.le.\n Hệ thống vừa tiếp nhận thêm 1 khách hàng có nhu cầu tư vấn lãi suất ngân hàng ${
          result.bank
        } với thông tin như sau: họ & tên: ${result.name}, sđt: ${result.phone}.
    Đăng ký vào lúc ${format.asString(
      "dd-MM-yyyy:hh:mm:ss",
      new Date()
    )}.\n Regard!`
      : `Dear duyen.dang, hau.le.\n Hệ thống vừa tiếp nhận thêm 1 khách hàng có nhu cầu cập nhật thông tin lãi suất với thông tin như sau: họ & tên: ${
          result.name
        }, email: ${result.email}.\n
    Đăng ký vào lúc ${format.asString(
      "dd-MM-yyyy:hh:mm:ss",
      new Date()
    )}.\n Regard!`;
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: "duyen.dang@bankexpress.vn",
      bcc: 'hau.le@bankexpress.vn',
      from: "khang.trinh@bankexpress.vn",
      subject: subject,
      text: content,
      html: `<strong>${content}</strong>`,
    };
    //ES6
    sgMail.send(msg).then(
      () => {},
      (error) => {
        console.error(error);

        if (error.response) {
          console.error(error.response.body);
        }
      }
    );
    res.status(201).json(result);
  } catch (error) {
    res.status(201).json(error);
  }
};
