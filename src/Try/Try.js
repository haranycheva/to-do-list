import { BoxEl } from "./Try.style.js";

export function Try({typeBox}) {
  return (
    <div style={{padding: 50,}}>
      <BoxEl typeBox={typeBox}/>
    </div>
  );
}
