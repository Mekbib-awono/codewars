function frequencies(s) {
    var freq = {};

    // Remove white space and split string to character
    strArray = s.replace(/\s/g, '').split('');
    
    // Create key if not created and increment its count
    strArray.forEach(function(key) {
        if (freq.hasOwnProperty(key)) {
            freq[key] = freq[key] + 1;
        } else {
            freq[key] = 1
        }
    })  

    // Return freq object
    return freq;  
}

var s = "dibi daba";
frequencies(s)

// takes: [ [String,Int] ], String; returns: String (with "0" and "1")
function encode(freqs,s) {
  
}

// takes [ [String, Int] ], String (with "0" and "1"); returns: String
function decode(freqs,bits) {
  
}