import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

export default (() => {
  
	function Sourcedata({ fileData, displayClass }: QuartzComponentProps) {
	  const text = fileData.text
  
	  if (text) {
  
		const cost = fileData.frontmatter?.cost
		var sourceStr

		return <p class={classNames(displayClass, "source")}>{sourceStr}</p> 
	  } else {
		return null
	  }
	}

	return Sourcedata
  }) satisfies QuartzComponentConstructor
  