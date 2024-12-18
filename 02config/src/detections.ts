function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }

  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("please provide an ID");
    return;
  }
  id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  // checking if type is null
  if (strs) {
    // checking if type is array
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}
