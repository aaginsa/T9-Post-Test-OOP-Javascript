var PersonLogic = require('../person/person.logic')

class PersonCheckLogic extends PersonLogic {
  constructor(...args) {
    super(...args)
  }
  nikIsValid() {
    return (super.getNik().length == 16) ? 'Valid' : 'Not Valid'
  }
  dobIsValid() {
    switch (this.nikIsValid()) {
      case 'Valid':
        const dobOnNik = super.getNik().substring(6,12); // YYMMDD
        const dd = dobOnNik.substr(0, 2);
        const mm = dobOnNik.substr(2, 2);
        const yy = dobOnNik.substr(4, 2);
        const dateFormat = yy + '-' + mm + '-' + dd;
        const dobOnNikFormatted = (+yy < 90) ? '20' + dateFormat : '19' + dateFormat;
        return (dobOnNikFormatted == super.getDob()) ? 'Valid' : 'Not Valid';
        break;
    
      default:
        return 'NIK Not Valid, cannot check DOB Validity'
        break;
    }
  }
}

module.exports = PersonCheckLogic;