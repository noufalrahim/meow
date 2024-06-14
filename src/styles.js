import { COLORS } from "./constant"

export const navbar = {
    position: 'fixed',
    top: '0',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.SECONDARY,
    color: 'white',
}

export const navbarTitle = { paddingLeft: '20px' }

export const content = {
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.PRIMARY,
    minHeight: '100vh',
}

export const contentBox = {
    backgroundColor: 'lightgray',
    paddingRight: '20px',
    paddingLeft: '20px',
    paddingTop: '10px',
    paddingBottom: '10px',
    borderRadius: '10px',
    margin: '20px'
}

export const imageContainer = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
    padding: '20px',
    borderRadius: '100%',
    margin: '20px',
    marginTop: '100px'
}

export const image = {
    width: '100px',
    height: '100px',
    margin: '20px'
}

export const meowBtn = {
    backgroundColor: COLORS.SECONDARY,
    borderRadius: '10px',
    margin: '20px',
    paddingRight: '40px',
    paddingLeft: '40px',
}

export const meowBtnText = {
    color: 'white',
    fontSize: '20px'
}

export const footer = {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
}

export const numberInput = {
    backgroundColor: COLORS.SECONDARY,
    padding: '20px',
    width: '25px',
    borderRadius: '100%',
    marginRight: '20px',
    color: 'white',
    fontSize: '20px',
    outline: 'none',
    border: 'none',
    textAlign: 'center',
}

export const select = {
    appearance: 'none',
    backgroundColor: COLORS.WHITE,
    padding: '10px 15px',
    borderRadius: '10px',
    fontSize: '16px',
    outline: 'none',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    width: '200px',
    marginRight: '20px',
}