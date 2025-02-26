import Button from "../components/ui/Button";
import Heading from "../components/ui/Heading";
import Paragraf from "../components/ui/Paragraf";
export default function DesignSistem(){
    return(
        <div className="space-y-4"> 
        <div>
            <Heading level={1}>Buttons</Heading>
            <Button type="primary">Click me</Button>
            <Button type="secondary">Click me</Button>
            <Button>Default</Button>
        </div>

        <div>
         <Heading level={1}>HEADING</Heading>
         <Heading level={2}>Level2</Heading>
         <Heading level={3}>Level3</Heading>
         <Heading level={4}>Level4</Heading>
        </div>

        <div>
            <Heading level={1}> PARAGRAF</Heading>
            <Paragraf>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, alias quibusdam aspernatur consequuntur mollitia nesciunt tempora dicta! Saepe optio dignissimos quam iste eveniet. Asperiores, expedita fuga corrupti repudiandae porro ipsam!</Paragraf>

            <Paragraf color="secondary" size="sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, alias quibusdam aspernatur consequuntur mollitia nesciunt tempora dicta! Saepe optio dignissimos quam iste eveniet. Asperiores, expedita fuga corrupti repudiandae porro ipsam!</Paragraf>
        </div>

        <div>
            <Heading level={1}>CARD</Heading>
        </div>

        </div>

    
    )
}