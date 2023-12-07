'use client'

import { Modal } from "@/components/ui/modal";

const SetupPage =()=> {
  return (
  <div className="p-4">
    <Modal title="Test" description="desc" isOpen onClose={function (){} }>
      modal
    </Modal>
    </div>
  )
}

export default SetupPage;