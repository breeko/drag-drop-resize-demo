import React, { useState, useEffect } from "react"
import { Slider, Typography, Button, Row, Col,  InputNumber } from 'antd';
import Grid from "./grid";

const Backend = () => {
  const [lag, setLag] = useState(2)
  const [remaining, setRemaining] = useState(2)
  const [cancel, setCancel] = useState<NodeJS.Timeout>()
  const { Text } = Typography
  const start = () => {
    const c = setInterval(() => {
      if (lag > 0) {
        setRemaining(prior => Math.max(0.0, Math.round((prior - 0.1) * 10) / 10))
      }
    }, 100);
    setCancel(c)
  }
  const stop = () => {
    clearInterval(cancel)
    setCancel(undefined)
  }

  useEffect(() => {
    if (remaining <= 0) {
      stop()
    }
  }, [remaining])

  useEffect(() => {
    stop()
    setRemaining(lag)
  }, [lag])


  return(
    <React.Fragment>
      <Row gutter={12} justify="center" align="middle">
        <Col span={4} >
          <Text>Remaining: {remaining}</Text>
        </Col>
        <Col span={4}>
          <InputNumber value={lag} onChange={(e: number) => setLag(e)}/>
        </Col>
        <Col span={2}>
          <Button onClick={start}>Start</Button>
        </Col>
        <Col span={2}>
          <Button onClick={stop} disabled={cancel === undefined}>Stop</Button>
        </Col>
      </Row>
      
    </React.Fragment>

  )
}

export default Backend
