import Heading from"./ui/Heading"
export default function Footer(){
    return (
        <footer className="bg-white px-4 py-2 rounded-xl shadow-xl mb-2 sticky bottom-0.5">
           
          <div className="text-center">
            <Heading level={4}>Made with love Boolean <i className="fa-solid fa-heart text-red-600"></i></Heading>
          </div>
        </footer>
    )
}