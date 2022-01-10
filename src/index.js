let doZeroToNinetyNine = function(number,numberZeroToNine, numberElevenToNinteen, numberDozens) {
    if ( 0 <= number && number <= 9 ) {
      for (let i = 0; i < numberZeroToNine.length; i += 1) {
          if (number == i){
              return numberZeroToNine[i];
          }
      }
  } else if ( 10 <= number && number <= 99) {
    if ( 11 <= number && number <= 19) {
        for (let i = 0; i < numberElevenToNinteen.length; i += 1) {
            let locNumber = 10 + i + 1;
            if (number == locNumber){
                return numberElevenToNinteen[i];
            }
        }
    } else if (number.toString().slice(-1) == '0' && number.toString().length == 2) {
        return numberDozens[number / 10 - 1];
    } else {
        let numberStr = number.toString();
        let numberDec = numberStr.slice(0, 1);
        let numberUnits = numberStr.slice(1, 2);

        return numberDozens[numberDec - 1] + ' ' + numberZeroToNine[numberUnits];
    }
  }
}

module.exports = function toReadable (number) {
  let numberZeroToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ];
  let numberElevenToNinteen = ['eleven','twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let numberDozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


  if ( 0 <= number && number <= 99 ) {
    return doZeroToNinetyNine(number, numberZeroToNine, numberElevenToNinteen, numberDozens); 
  } else if ( 100 <= number && number <= 999) {
      if (number.toString().slice(-2) == '00' && number.toString().length == 3) {
        let locNumber = number / 100;
        for (let i = 1; i < numberZeroToNine.length; i += 1) {
            if (locNumber == i){
                return numberZeroToNine[i] + ' hundred';
            }
        }
    }
  }
}
