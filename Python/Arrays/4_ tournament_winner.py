# O(n) time | O(k) space, n is number of competitions or results, k is number of teams competing due to scores data structure which will only ever store k + 1 keys only need to keep track of keys, O(k+1) is really just O(k). Space complexity would be way worse if length of characters.  Since 30 characters and 1 are constants that's how we remove to be O(k)

HOME_TEAM_WON = 1
def tournamentWinner(competitions, results):
    currentBestTeam = ""
    scores = {currentBestTeam: 0}

    for idx, competition in enumerate(competitions):
        result = results[idx]
        homeTeam, awayTeam = competition

        winningTeam = homeTeam if result == HOME_TEAM_WON else awayTeam

        updateScores(winningTeam, 3, scores)

        if scores[winningTeam] > scores[currentBestTeam]:
            currentBestTeam = winningTeam
    return currentBestTeam

def updateScores(team, points, scores):
    if team not in scores:
        scores[team] = 0
        
    scores[team] += points
