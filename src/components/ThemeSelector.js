import { useTheme } from '../hooks/useTheme'

// styles & images
import './ThemeSelector.css'
import modeIcon from '../assets/mode_icon.svg'

const themeColors = [ '#58249c', '#249c6b', '#b70233']

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme()

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark')
  }
  console.log(mode)
  return (
    <div className='theme-selector'>
      <div className="mode-toggle">
        <img
        onClick={toggleMode} 
          src={modeIcon} 
          alt="ligh and dark mode icon"
          style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }} 
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map(color => (
          <div 
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color}}
          />
        ))}

      </div>
      
    </div>
  )
}
