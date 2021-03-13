import { ChildAsFC } from './Child';
  
const Parent = () => {
  return <ChildAsFC color="red" onClick={() => console.log('Clicked')}>
    fdsdfwqef
   </ChildAsFC>;    
};

export default Parent;
