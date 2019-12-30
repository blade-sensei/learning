// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function topNCompetitors(numCompetitors, topNCompetitors, competitors,
    numReviews, reviews) {
    // WRITE YOUR CODE HERE

    // first we need a mapper for each competitor
    // this mapper has competitorName as keys and values 
    // are the number of occurancies in each review


    //so we also gonna need a function to count how many times
    // a competitor name if found in a review text
    let mapperCompetitors = mapCompetitorCounter(reviews, competitors);
    mapperCompetitors = Object.entries(mapperCompetitors);

    // then we will sort this mapp as ASC
    const mapperSorted = mapperCompetitors.sort((competitorCounter, compair) => {
        // ok a forgot alphabetic sort in case they are equals value
        if (competitorCounter[1] === compair[1]) {
            return alphabeticalSort(competitorCounter[0], compair[0]);
        }
        return compair[1] - competitorCounter[1]
    });

    // the take exactly topNCompetitors
    let topCompetitor = mapperSorted.slice(0, topNCompetitors);
    // return concat of this topNCompetitors as string
    topCompetitor = topCompetitor.map(competitor => competitor[0]);
    return topCompetitor;
}
// FUNCTION SIGNATURE ENDS


function timesWord(review, competitorName) {

    const reviewSplited = review.split(' ');
    let counter = 0;
    for (let reviewWord of reviewSplited) {
        if (reviewWord === competitorName) {
            counter++;
        }
    }
    return counter;
}

function mapCompetitorCounter(reviews, competitors) {
    const occurences = {};

    for (let review of reviews) {
        for (let competitorName of competitors) {
            const numberTimesFounded = timesWord(review, competitorName);
            if (occurences[competitorName]) {
                occurences[competitorName] = occurences[competitorName] + numberTimesFounded;
            } else {
                occurences[competitorName] = numberTimesFounded;
            }
        }
    }

    return occurences;

}

function alphabeticalSort(first, second) {
    if (first > second) {
        return -1;
    }
    if (second > first) {
        return 1;
    }
    return 0;
}
