import { generateClasses } from "@formkit/themes"

const config = {
    config: {

        classes: generateClasses({
            global:{
                            message : 'text-red-500  font-semibold'

            }
        })
        
    }
}

export default config