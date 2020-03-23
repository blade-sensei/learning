const servers = [
  {
    id: 'server-a',
    name: 'server-a',
    children: [
      {
        id: 'server-1',
        name: 'server-1',
      },
      {
        id: 'server-2',
        name: 'server-2',
      },
    ],
  },
  {
    id: 'server-b',
    name: 'server-b',
    children: [
      {
        id: 'server-1',
        name: 'server-1',
        children: [
          {
            id: 'server-1-b',
            name: 'server-1-b',
          },
        ],
      },
    ],
  },
  {
    id: 'server-c',
    name: 'server-c',
  },
  {
    id: 'server-d',
    name: 'server-d',
    children: [
      {
        id: 'server-3',
        name: 'server-3',
      },
    ],
  },
];


function createArrow(status) {
  const arrow = document.createElement('span');
  arrow.innerHTML = status;
  return arrow;
}

const ARROW_ICON = {
  CLOSE: '&#x25b8;',
  OPEN: '&#9662;',
};

const { body } = document;


function createListItem(server) {
  const arrow = createArrow(ARROW_ICON.OPEN);
  const item = document.createElement('div');
  item.className = 'list-item';
  item.appendChild(arrow);
  const content = document.createElement('span');
  if (server.children) {
    content.addEventListener('click', toggle);
  }
  content.textContent = server.name;
  item.appendChild(content);
  return item;
}


function createServers(servers) {
  const list = document.createElement('div');
  list.className = 'servers-list';
  servers.forEach((server) => {
    const element = createListItem(server);
    list.appendChild(element);
    if (server.children) {
      element.appendChild(createServers(server.children));
    }
  });
  return list;
}

// main
const test = createServers(servers);
body.appendChild(test);

function toggle(e) {
  const server = e.target;
  const serverList = server.nextSibling;
  const status = serverList.style.display;
  const arrow = server.previousSibling;
  if (status === 'none') {
    arrow.innerHTML = ARROW_ICON.OPEN;
    serverList.style.display = 'inline';
  } else {
    arrow.innerHTML = ARROW_ICON.CLOSE;
    serverList.style.display = 'none';
  }
}

