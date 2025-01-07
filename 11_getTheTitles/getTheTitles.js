const getTheTitles = function(books) {
    title_array = []
    for(let i = 0; i < books.length; i++) {
        title_array.push(books[i].title)
    }
    return title_array
};

// Do not edit below this line
module.exports = getTheTitles;
