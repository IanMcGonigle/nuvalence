export default function Container({className = "", children}) {
  return (
    <div className={`max-w-7xl mx-auto ${className}`}>
      <div>
        {children}
      </div>
    </div>
  )
}
