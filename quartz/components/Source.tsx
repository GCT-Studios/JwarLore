import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

export default (() => {
  
	function Sourcedata({ fileData, displayClass }: QuartzComponentProps) {
	  const text = fileData.text
  
	  if (text) {
  
		const source = fileData.frontmatter?.source
		var sourceStr

		if (source != null){ sourceStr = source + ' ' }

		return <p class={classNames(displayClass, "source")}><em><strong>Source: </strong>{sourceStr}</em></p>
	  } else {
		return null
	  }
	}

	return Sourcedata
  }) satisfies QuartzComponentConstructor
  