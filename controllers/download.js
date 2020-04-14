const bankService = require("../services/bank");
const downloadService = require("../services/download");
const format = require("date-format");
const xl = require("excel4node");

function createSheet(sheet, rows) {
  sheet.cell(1, 1).string("Ngân hàng");
  sheet.cell(1, 2).string("Không kỳ hạn");
  sheet.cell(1, 4).string("1 tháng");
  sheet.cell(1, 6).string("2 tháng");
  sheet.cell(1, 8).string("3 tháng");
  sheet.cell(1, 10).string("4 tháng");
  sheet.cell(1, 12).string("6 tháng");
  sheet.cell(1, 14).string("9 tháng");
  sheet.cell(1, 16).string("12 tháng");
  sheet.cell(1, 18).string("13 tháng");
  sheet.cell(1, 20).string("18 tháng");
  sheet.cell(1, 22).string("24 tháng");
  sheet.cell(1, 24).string("36 tháng");
  for (let i = 0; i < rows.length; i++) {
    const item = rows[i];
    sheet.cell(i + 2, 1).string(item.bank);
    for (let j = 0; j < item.rates.length; j++) {
      const rate = item.rates[j];
      if (!rate) {
        console.log("something went wrong with rate");
        continue;
      }
      if (rate.value === -10) {
        sheet.cell(i + 2, j * 2 + 2).string("Không hỗ trợ");
        sheet.cell(i + 2, j * 2 + 3).string("");
      } else if (rate.value === -100) {
        sheet.cell(i + 2, j * 2 + 2).string("Thỏa thuận");
        sheet.cell(i + 2, j * 2 + 3).string("");
      } else {
        sheet.cell(i + 2, j * 2 + 2).string(`${rate.value}%`);
        sheet.cell(i + 2, j * 2 + 3).string(rate.threshold);
      }
    }
    console.log("bank " + item.bank + "completed\n");
  }
  console.log("completed all rate\n");
}

exports.get = async (req, res, next) => {
  try {
    let online = [];
    let offline = [];
    let banks = await bankService.list();
    for (let i = 0; i < banks.length; i++) {
      const bank = banks[i];
      let latestOnlineRates = downloadService.getLatestRates(
        bank.interests,
        true
      );
      let latestOfflineRates = downloadService.getLatestRates(bank.interests);
      if (!latestOfflineRates || !latestOnlineRates) {
        console.log("something went wrong with " + bank.name + "\n");
        continue;
      }
      //   console.log(
      //     `bank ${bank.name}: (online - ${latestOnlineRates.length}) (offline - ${latestOfflineRates})`
      //   );

      online.push({ bank: bank.name, rates: latestOnlineRates });
      offline.push({ bank: bank.name, rates: latestOfflineRates });
    }
    var wb = new xl.Workbook();
    var ws = wb.addWorksheet("Online");
    var ws1 = wb.addWorksheet("Offline");
    createSheet(ws, online);
    createSheet(ws1, offline);
    let date = format.asString("dd-MM-yyyy", new Date()); //just the time
    wb.write(`Lãi suất tiền gửi ${date} (bankexpress).xlsx`, res);
  } catch (error) {
    console.error(error);
  }
};
