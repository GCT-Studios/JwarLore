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

		if (FMsource != null){ sourceStr = <p class={classNames(displayClass, "source")}><em><strong>Source: </strong>{FMsource}</em></p> }
		if (FMauthor != null){ authorStr = <p class={classNames(displayClass, "author")}><em><strong>Author: </strong>{FMauthor}</em></p> }

		return <div class="frontmatter">{sourceStr}{authorStr}</div>
	  } else {
		return null
	  }
	}

	return FMdata
  }) satisfies QuartzComponentConstructor
  