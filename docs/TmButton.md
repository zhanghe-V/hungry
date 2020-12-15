 import { TmButton } from 'hungry'

  # TmButton

  ## 基础示例

  ```tsx
  import React from 'react'
  import { TmButton } from 'hungry'

  export default function Demo() {
    return <TmButton>hungry</TmButton>
  }
  ```

  ## 所有状态

  ```tsx
  import React from 'react'
  import { TmButton } from 'hungry'

  export default function Demo() {
    return (
      <>
        <TmButton type="primary" style={{ marginRight: 10 }}>hungry</TmButton>
        <TmButton type="error">hungry</TmButton>
      </>
    )
  }
  ```