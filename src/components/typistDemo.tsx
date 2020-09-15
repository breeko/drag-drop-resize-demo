import { Button, Input, InputNumber } from "antd"
import React, { useState } from "react"
import Typist from 'react-typist'

const TypistDemo = () => {
  const [color, setColor] = useState("#00477F")
  const [first, setFirst] = useState("on an interactive dashboard")
  const [second, setSecond] = useState("visualized")
  const [third, setThird] = useState("analyzed")
  const [fourth, setForth] = useState("on a Tactyc")
  const [preTypeDelay, setPreTypeDelay] = useState(1000)
  const [initalDelay, setInitialDelay] = useState(1000)
  const [backspaceDelay, setBackspaceDelay] = useState(1000)
  const [start, setStart] = useState(false)
  
  return(
    <div>
      Color: <Input value={color} onChange={e => setColor(e.target.value)} />
      First <Input value={first} onChange={e => setFirst(e.target.value)}/>
      Second <Input value={second} onChange={e => setSecond(e.target.value)}/>
      Third <Input value={third} onChange={e => setThird(e.target.value)}/>
      Forth <Input value={fourth} onChange={e => setForth(e.target.value)}/>
      Initial Delay: <InputNumber value={initalDelay} min={0} step={0.1} onChange={(e: number) => setInitialDelay(e)}/>
      Backspace Delay: <InputNumber value={backspaceDelay} min={0} step={0.1} onChange={(e: number) => setBackspaceDelay(e)} />
      Pre Type Delay: <InputNumber value={initalDelay} min={0} step={0.1} onChange={(e: number) => setPreTypeDelay(e)}/>
      
      <Button onClick={() => setStart(true)}>start</Button>
      <Button onClick={() => setStart(false)}>stop</Button>
      {start &&
        <div style={{fontFamily: "Questrial", fontSize:"2.5em", backgroundColor:"#fefefe"}}>
        Your Excels models&nbsp;
        <div style={{color, fontWeight: 'bold'}}>
          <Typist cursor={{blink: true}}>
            <Typist.Delay ms={initalDelay}/>
              {first}
              <Typist.Backspace count={first.length} delay={backspaceDelay} />
              <Typist.Delay ms={preTypeDelay}/>
              {second}
              <Typist.Backspace count={second.length} delay={backspaceDelay} />
              <Typist.Delay ms={preTypeDelay}/>
              {third}
              <Typist.Backspace count={third.length} delay={backspaceDelay} />
              <Typist.Delay ms={preTypeDelay}/>
              {fourth}
              <Typist.Backspace count={fourth.length} delay={backspaceDelay} />
              <Typist.Delay ms={preTypeDelay}/>
              {first}
              <Typist.Backspace count={first.length} delay={backspaceDelay} />
              <Typist.Delay ms={preTypeDelay}/>
              {second}
              <Typist.Backspace count={second.length} delay={backspaceDelay} />
              <Typist.Delay ms={preTypeDelay}/>
              {third}
              <Typist.Backspace count={third.length} delay={backspaceDelay} />
              <Typist.Delay ms={preTypeDelay}/>
              {fourth}
              <Typist.Backspace count={fourth.length} delay={backspaceDelay} />
            </Typist>
        </div>
      </div>
    }
    </div>
  )
}

export default TypistDemo