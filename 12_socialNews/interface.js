class Link {
  constructor(name, url, author) {
    if (!url.startsWith("http://")
      && !url.startsWith("https://")) {
      url = `http://${url}`
    }
    this.name = name;
    this.url = url;
    this.author = author;
  }
}

const links = [];
links.push(new Link("Hacker News", "https://news.ycombinator.com", "Baptiste"));
links.push(new Link("Reddit", "https://reddit.com", "Thomas"));
links.push(new Link("Boing Boing", "boingboing.net", "Daniel"));

const choices = `0: Quits
\n1: Show existing links
\n2: Add a link
\n3: Remove a link`;

let choice = null;
while (choice !== 0) {
  choice = prompt(choices);
  switch (choice) {
    case "1": {
      for (const link of links) {
        alert(`${link.name} ${link.url} Author: ${link.author}`);
      }
      break;
    }
    case "2": {
      const name = prompt("link name");
      const url = prompt("link url");
      const author = prompt("link author");
      links.push(new Link(name, url, author));
      alert("link added to the list of links");
      break;
    }
    case "3": {
      const id = prompt(`provide id of link to be removed (between 1 and ${links.length})`);
      id = Number(id);
      if (id > 0 && id <= links.length) {
        links.splice(id - 1, 1);
        alert(`link with id: ${id} removed`);
      } else {
        alert(`unknown id: please provide id between 1 and ${links.length}`);
      }
      break;
    }
  }
}

alert("See you later!");