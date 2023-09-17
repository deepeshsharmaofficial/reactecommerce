import { ThreeDots } from  'react-loader-spinner'

const Loader = () => {
  return (
  <div className="loader-spinner">  
    <ThreeDots 
      height="60" 
      width="60" 
      radius="9"
      color="#6254F3" 
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  </div>
  )
}

export default Loader;