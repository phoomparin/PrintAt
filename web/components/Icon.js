import React from 'react'
import styled from 'react-emotion'

const icons = {
  add: {
    i: `M436 238H242V44c0-6.6-5.4-12-12-12h-12c-6.6 0-12 5.4-12 12v194H12c-6.6 0-12
        5.4-12 12v12c0 6.6 5.4 12 12 12h194v194c0 6.6 5.4 12 12 12h12c6.6 0 12-5.4
        12-12V274h194c6.6 0 12-5.4 12-12v-12c0-6.6-5.4-12-12-12z`,
    vb: '0 0 448 512'
  },
  close: {
    i: `M217.5 256l137.2-137.2c4.7-4.7 4.7-12.3 0-17l-8.5-8.5c-4.7-4.7-12.3-4.7-17
    0L192 230.5 54.8 93.4c-4.7-4.7-12.3-4.7-17 0l-8.5 8.5c-4.7 4.7-4.7 12.3 0 17L166.5
    256 29.4 393.2c-4.7 4.7-4.7 12.3 0 17l8.5 8.5c4.7 4.7 12.3 4.7 17 0L192 281.5l137.2
    137.2c4.7 4.7 12.3 4.7 17 0l8.5-8.5c4.7-4.7 4.7-12.3 0-17L217.5 256z`,
    vb: '0 0 384 512'
  },
  left: {
    i: `M25.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0
    17L64.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17
    0L25 264.5c-4.6-4.7-4.6-12.3.1-17z`,
    vb: '0 0 192 512'
  },
  dashboard: {
    i: `M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z`
  },
  notifications: {
    i: `M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2
    2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5
    1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z`
  },
  settings: {
    i: `M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46
    2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49
    0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11
    1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38
    2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59
    1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12
    15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z`
  },
  play: {
    i: `M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z`
  }
}

const Svg = styled(props => <svg {...props} />)`
  width: ${props => props.size || 1.5}em;
  height: ${props => props.size || 1.5}em;
  fill: ${props => props.fill || '#ffffff'};
  opacity: ${props => props.opacity || 1};
`

const Icon = ({i}) => icons[i] ? (
  <Svg viewBox={icons[i].vb || '0 0 24 24'}>
    <path d={icons[i].i} />
  </Svg>
) : <div />

export default Icon
