import { Redirect,Link, Route, Switch,  BrowserRouter as Router } from 'react-router-dom';



const TabsUI = () => {
 return(


    <div>
      {/* <IonItem routerLink="/tabs/dashboard" routerDirection="none" detail={false} lines="none">
          <IonLabel>Hola</IonLabel>
      </IonItem> */}


  <div className="rounded-full bg-white shadow-2xl w-auto h-auto m-3 border-2">
    <div className="bg-gray-100  px-8 mx-2 my-2 py-2 rounded-full gap-20 flex items-center shadow-inner">

          
          <Link to="/tabs/profile">
          <div className="grid grid-cols-1 cursor-pointer transition duration-200 ease-in opacity-75 hover:opacity-100 transform hover:-translate-z-1 hover:scale-110 hover:text-purple-700">
          <div className="w-7">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          </div>
          <p className="text-sm">Mi Perfil</p>
          </div>
          </Link>
      

       <Link to="/tabs/dashboard">
       <div className="grid grid-cols-1 cursor-pointer transition duration-200 ease-in opacity-75 hover:opacity-100 transform hover:-translate-z-1 hover:scale-110 hover:text-purple-700">
       <div className="w-7">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
       </svg>
       </div>
       <p className="text-sm">Tablero</p>
       </div>
       </Link>

       <Link to="/tabs/settings">
          <div className="grid grid-cols-1 cursor-pointer transition duration-200 ease-in opacity-75 hover:opacity-100 transform hover:-translate-z-1 hover:scale-110 hover:text-purple-700">
          <div className="w-7">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          </div>
          <p className="text-sm">Configuraciones</p>
          </div>
          </Link>
      </div>
      </div>
    </div> 

 )
}

const Tabs = () => {
  return ( 
   <TabsUI />
  );
};

export default Tabs;
