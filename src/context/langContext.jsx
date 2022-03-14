import React, {useState} from 'react';
import MensajesEsp from '../lang/es-SP.json';
import MensajesIngles from '../lang/en-US.json';
import { IntlProvider } from 'react-intl';

const langContext = React.createContext();

const LangProvider = ({children}) => {

    const [mensajes, setMensaje] = useState(MensajesIngles);
    const [locale , setLocale] = useState('es-SP');
    
    const setLenguaje = (lenguaje) => {
        switch (lenguaje) {   
            case 'en-US':
              setMensaje(MensajesIngles);
              setLocale('en-US') 
             break;
            case 'es-SP': 
             setMensaje(MensajesEsp);
             setLocale('es-SP')
           break;
            default:
              setMensaje(MensajesEsp);
              setLocale('es-SP')
        }      
    }
return (
<langContext.Provider value={{setLenguaje: setLenguaje}}>
   <IntlProvider locale={locale} messages={mensajes}>
    {children}
    </IntlProvider>
</langContext.Provider>

    )
}

export {LangProvider, langContext}