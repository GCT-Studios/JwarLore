import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

export default (() => {
  
	function FMdata({ fileData, displayClass }: QuartzComponentProps) {
	  const text = fileData.text
  
	  if (text) {
  
		const FMsource = fileData.frontmatter?.source
		var sourceStr
		const FMauthor = fileData.frontmatter?.author
		var authorStr

		if (FMsource != null){ sourceStr = "<strong>Source: </strong>"+{FMsource} }
		if (FMauthor != null){ authorStr = "<br /><strong>Author: </strong>"+{FMauthor} }

		return <p class={classNames(displayClass, "frontmatter")}>{sourceStr}{authorStr}</p>
	  } else {
		return null
	  }
	}

	return FMdata
  }) satisfies QuartzComponentConstructor
  