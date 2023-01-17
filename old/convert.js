const fs = require('fs');

const json = fs.readFileSync('old/tech-radar.json', { encoding: 'utf-8' });
const ob = JSON.parse(json);

console.log(ob.blips.map((a) => {
  const m = {
    'Programming Languages and Frameworks': 0,
    'Tools': 1,
    'Platforms': 2,
    'Techniques': 3,
  }

  const r = {
    adopt: 0,
    trial: 1,
    assess: 2,
    hold: 3,
  }

  return {
    label: a.name,
    quadrant: m[a.quadrant],          // 0,1,2,3 (counting clockwise, starting from bottom right)
    ring: r[a.ring],              // 0,1,2,3 (starting from inside)
    moved: 0             // -1 = moved out (triangle pointing down)
    //  0 = not moved (circle)
    //  1 = moved in  (triangle pointing up)
  };
  //{
  //         label: "Some Entry",
  //         quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
  //         ring: 2,              // 0,1,2,3 (starting from inside)
  //         moved: 0             // -1 = moved out (triangle pointing down)
  //                               //  0 = not moved (circle)
  //                               //  1 = moved in  (triangle pointing up)
  //       },

}))
