var censoredWords = ["sad", "bad", "mad"];

var customCensoredWords = [];

function censor(inStr) {
	for (idx in censoredWords) {
		inStr = instr.replace(censoredWords[idx], "****");
	}
	for (idx in customCensoredWords) {
		inStr = instr.replace(customCensoredWords[idx], "****");
	}
return instr;
}

function addCensoredWords(word) {
	customCensoredWords.push(word);
}

function getCensoredWords() {
	return censoredWords.concat(customerCensoredWords);
}

exports.censor = censor;
exports.addCensoredWords = addCensoredWords;
exports.getCensoredWords = getCensoredWords;