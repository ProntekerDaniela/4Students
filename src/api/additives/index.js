async function load() {
  let resp = await fetch("./data.json");
  return await resp.json();
}

async function getComposition(composition) {
  let additives = await load();
  return additives.filter((additive) =>
    composition.toUpperCase().includes(additive.code)
  );
}

export default {
  getComposition,
};
