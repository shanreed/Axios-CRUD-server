const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3333;


const server = express();
server.use(bodyParser.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

// Data from https://www.uncommongoods.com/fun/by-interest/geek-gifts

let items = [
  {
    name: "Family Tree",
    id: 0,
    area: 'data-management',
    imageUrl:
      "../images/family-tree-snapshot.png",
    description:
      "Ah, nostalgia. Give yourself a double dose with this grown-up, just-for-you version of one of childhood's greatest gadgets: the reel viewer. Assemble snapshots of your favorite memories and add ",
    description2:
      "Most of our items are in stock and will ship quickly. Orders for in-stock items placed before 5pm ET Monday through Friday, excluding Federal holidays, will ship in the US: ECONOMY description2:"
  },
  {
    name: "Family Tree",
    id: 1,
    area: 'data-management',
    imageUrl:
      "../images/family-tree-snapshot.png",
    description:
      "Ah, nostalgia. Give yourself a double dose with this grown-up, just-for-you version of one of childhood's greatest gadgets: the reel viewer. Assemble snapshots of your favorite memories and add ",
    description2:
      "Most of our items are in stock and will ship quickly. Orders for in-stock items placed before 5pm ET Monday through Friday, excluding Federal holidays, will ship in the US: ECONOMY description2:"
  },
  {
    name: "Family Tree",
    id: 2,
    area: 'data-management',
    imageUrl:
      "../images/family-tree-snapshot.png",
    description:
      "Ah, nostalgia. Give yourself a double dose with this grown-up, just-for-you version of one of childhood's greatest gadgets: the reel viewer. Assemble snapshots of your favorite memories and add ",
    description2:
      "Most of our items are in stock and will ship quickly. Orders for in-stock items placed before 5pm ET Monday through Friday, excluding Federal holidays, will ship in the US: ECONOMY description2:"
  },
  {
    name: "Family Tree",
    id: 3,
    area: 'data-management',
    imageUrl:
      "../images/family-tree-snapshot.png",
    description:
      "Ah, nostalgia. Give yourself a double dose with this grown-up, just-for-you version of one of childhood's greatest gadgets: the reel viewer. Assemble snapshots of your favorite memories and add ",
    description2:
      "Most of our items are in stock and will ship quickly. Orders for in-stock items placed before 5pm ET Monday through Friday, excluding Federal holidays, will ship in the US: ECONOMY description2:"
  },
  {
    name: "Family Tree",
    id: 4,
    area: 'data-management',
    imageUrl:
      "../images/family-tree-snapshot.png",
    description:
      "Ah, nostalgia. Give yourself a double dose with this grown-up, just-for-you version of one of childhood's greatest gadgets: the reel viewer. Assemble snapshots of your favorite memories and add ",
    description2:
      "Most of our items are in stock and will ship quickly. Orders for in-stock items placed before 5pm ET Monday through Friday, excluding Federal holidays, will ship in the US: ECONOMY description2:"
  },
  {
    name: "Family Tree",
    id: 5,
    area: 'data-management',
    imageUrl:
      "../images/family-tree-snapshot.png",
    description:
      "Ah, nostalgia. Give yourself a double dose with this grown-up, just-for-you version of one of childhood's greatest gadgets: the reel viewer. Assemble snapshots of your favorite memories and add ",
    description2:
      "Most of our items are in stock and will ship quickly. Orders for in-stock items placed before 5pm ET Monday through Friday, excluding Federal holidays, will ship in the US: ECONOMY description2:"
  },
  {
    name: "Family Tree",
    id: 6,
    area: 'data-management',
    imageUrl:
      "../images/family-tree-snapshot.png",
    description:
      "Ah, nostalgia. Give yourself a double dose with this grown-up, just-for-you version of one of childhood's greatest gadgets: the reel viewer. Assemble snapshots of your favorite memories and add ",
    description2:
      "Most of our items are in stock and will ship quickly. Orders for in-stock items placed before 5pm ET Monday through Friday, excluding Federal holidays, will ship in the US: ECONOMY description2:"
  },
  {
    name: "Family Tree",
    id: 7,
    area: 'data-management',
    imageUrl:
      "../images/family-tree-snapshot.png",
    description:
      "Ah, nostalgia. Give yourself a double dose with this grown-up, just-for-you version of one of childhood's greatest gadgets: the reel viewer. Assemble snapshots of your favorite memories and add ",
    description2:
      "Most of our items are in stock and will ship quickly. Orders for in-stock items placed before 5pm ET Monday through Friday, excluding Federal holidays, will ship in the US: ECONOMY description2:"
  },
  {
    name: "Family Tree",
    id: 8,
    area: 'data-management',
    imageUrl:
      "../images/family-tree-snapshot.png",
    description:
      "Ah, nostalgia. Give yourself a double dose with this grown-up, just-for-you version of one of childhood's greatest gadgets: the reel viewer. Assemble snapshots of your favorite memories and add ",
    description2:
      "Most of our items are in stock and will ship quickly. Orders for in-stock items placed before 5pm ET Monday through Friday, excluding Federal holidays, will ship in the US: ECONOMY description2:"
  },
  {
    name: "Family Tree",
    id: 9,
    area: 'data-management',
    imageUrl:
      "../images/family-tree-snapshot.png",
    description:
      "Ah, nostalgia. Give yourself a double dose with this grown-up, just-for-you version of one of childhood's greatest gadgets: the reel viewer. Assemble snapshots of your favorite memories and add ",
    description2:
      "Most of our items are in stock and will ship quickly. Orders for in-stock items placed before 5pm ET Monday through Friday, excluding Federal holidays, will ship in the US: ECONOMY description2:"
  },
  {
    name: "Family Tree",
    id: 10,
    area: 'data-management',
    imageUrl:
      "../images/family-tree-snapshot.png",
    description:
      "Ah, nostalgia. Give yourself a double dose with this grown-up, just-for-you version of one of childhood's greatest gadgets: the reel viewer. Assemble snapshots of your favorite memories and add ",
    description2:
      "Most of our items are in stock and will ship quickly. Orders for in-stock items placed before 5pm ET Monday through Friday, excluding Federal holidays, will ship in the US: ECONOMY description2:"
  },
  {
    name: "Family Tree",
    id: 11,
    area: 'data-management',
    imageUrl:
      "../images/family-tree-snapshot.png",
    description:
      "Ah, nostalgia. Give yourself a double dose with this grown-up, just-for-you version of one of childhood's greatest gadgets: the reel viewer. Assemble snapshots of your favorite memories and add ",
    description2:
      "Most of our items are in stock and will ship quickly. Orders for in-stock items placed before 5pm ET Monday through Friday, excluding Federal holidays, will ship in the US: ECONOMY description2:"
  }
];

server.get("/items", (req, res) => {
  res.json(items);
});
let itemId = 12;

server.get("/itemById/:id", (req, res) => {
  const { id } = req.params;
  const findItemById = item => {
    return item.id == id;
  };
  const foundItem = items.find(findItemById);
  if (!foundItem) {
    return sendUserError("No Item found by that ID", res);
  } else {
    res.json(foundItem);
  }
});

server.post("/items", (req, res) => {
  const { name, area, imageUrl, description, description2 } = req.body;
  const newItem = { name, area, imageUrl, description, description2, id: itemId };
  if (!name || !area || !description) {
    return sendUserError(
      "Ya gone did goofed! Name/area/Description are all required to create an item in the item DB.",
      res
    );
  }
  const findItemByName = item => {
    return item.name === name;
  };
  if (items.find(findItemByName)) {
    return sendUserError(
      `Ya gone did goofed! ${name} already exists in the item DB.`,
      res
    );
  }

  items.push(newItem);
  itemId++;
  res.json(items);
});

server.put("/items/:id", (req, res) => {
  const { id } = req.params;
  const { name, area, imageUrl, description, description2 } = req.body;
  const findItemById = item => {
    return item.id == id;
  };
  const foundItem = items.find(findItemById);
  if (!foundItem) {
    return sendUserError("No Item found by that ID", res);
  } else {
    if (name) foundItem.name = name;
    if (area) foundItem.area = area;
    if (imageUrl) foundItem.imageUrl = imageUrl;
    if (description) foundItem.description = description;
    if (description2) foundItem.description2 = description2;
    res.json(items);
  }
});

server.delete("/items/:id", (req, res) => {
  const { id } = req.params;
  const foundItem = items.find(item => item.id == id);

  if (foundItem) {
    const ItemRemoved = { ...foundItem };
    items = items.filter(item => item.id != id);
    res.status(200).json(items);
  } else {
    sendUserError("No item by that ID exists in the item DB", res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
