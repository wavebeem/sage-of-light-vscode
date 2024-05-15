import Color from "colorjs.io";

function round(number: number): number {
  return Math.round(number);
  // return Number(number.toFixed(5));
}

function letsGoOKLCHInternal(
  objName: string,
  obj: Record<string, string>
): void {
  console.log(`\n\nconst ${objName} = {`);
  for (const [name, color] of Object.entries(obj)) {
    let [l, c, h] = new Color(color).oklch;
    l = Math.round(l * 100);
    c = Math.round((c / 0.4) * 100);
    h = Math.round(h);
    console.log(`  ${name}: oklchP(${l}, ${c}, ${h}),`);
  }
  console.log("} as const;");
}

export function letsGoOKLCH(
  objects: Record<string, Record<string, string>>
): void {
  for (const [name, obj] of Object.entries(objects)) {
    letsGoOKLCHInternal(name, obj);
  }
}
