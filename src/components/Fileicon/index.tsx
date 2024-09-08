import './fileIconIndex.css'
import { isDirectory, isImage, isVideo } from '@/utils'
import Iconfont from '@/components/Iconfont'
import { Tooltip } from 'antd'

interface FileIconProps {
  name: string
  url: string
  currentName: string
  // eslint-disable-next-line
  onClick: any
}

function Item(name: string) {
  if (isDirectory(name)) {
    return <Iconfont type="wenjianjia-1" size={64}></Iconfont>
  } else if (isImage(name)) {
    return <Iconfont type="image" size={64}></Iconfont>
  } else if (isVideo(name)) {
    return <Iconfont type="mp" size={64}></Iconfont>
  } else {
    return <Iconfont type="fb" size={64}></Iconfont>
  }
}

function FileIcon(props: FileIconProps) {
  const { onClick, currentName } = props

  return (
    <div className="file-item" onClick={onClick}>
      {Item(currentName)}
      <div className="name">
        <Tooltip placement="topLeft" title={currentName}>
          {currentName}
        </Tooltip>
      </div>
    </div>
  )
}

export default FileIcon
