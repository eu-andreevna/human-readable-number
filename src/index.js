module.exports = function toReadable (number) {
  let numberZeroToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ];
  let numberElevenToNinteen = ['eleven','twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let numberDozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hundred = 'hundred';

  if ( 0 <= number && number <= 9 ) {
      for (let i = 0; i < numberZeroToNine.length; i += 1) {
          if (number == i){
              return numberZeroToNine[i];
          }
      }
  }
}
