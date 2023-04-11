import "./mainlayout.css"

type Props = {
  children: any
}

const MainLayout = (props: Props) => {
  let { children } = props
  return (
    <>
      <div className="px-3 py-2 d-flex">
        <span className="nav-items">Home</span>
        <span className="nav-items">Save</span>
        <span className="nav-items">Preview</span>
      </div>
      {children}
    </>
  )
}

export default MainLayout