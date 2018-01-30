const fetch = require("node-fetch");

module.exports = (repo, token, eventId) =>
  async function gitHubIssueStats(sendEvent) {
    const query = `query { 
      repository(owner:"pascalw", name:"dashbling") { 
        closedIssues:issues(states:CLOSED) {
          totalCount
        },
        openIssues: issues(states:OPEN) {
          totalCount
        }
      }
    }`;

    const headers = { "Authorization": `bearer ${token}` };

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      body: JSON.stringify({ query: query }),
      headers
    });

    const json = await response.json();
    sendEvent(eventId, {
      repo,
      openIssues: json["data"]["repository"]["openIssues"]["totalCount"],
      closedIssues: json["data"]["repository"]["closedIssues"]["totalCount"]
    });
  };
