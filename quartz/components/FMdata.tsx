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

		if (FMsource != null){ sourceStr = <span><strong>Source: </strong>{FMsource}</span> }
		if (FMauthor != null) {
			if (FMsource != null) {
				authorStr = <span><br /><strong>Author: </strong>{FMauthor}</span>
			} else {
				authorStr = <span><strong>Author: </strong>{FMauthor}</span>
			}
		}

		return <p class={classNames(displayClass, "frontmatter")}>{sourceStr}{authorStr}</p>
	  } else {
		return null
	  }
	}

	return FMdata
  }) satisfies QuartzComponentConstructor
  