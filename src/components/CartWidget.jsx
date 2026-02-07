import React from 'react'

const CartWidget = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>

            <span style={{ fontSize: '24px', marginRight: '5px' }}>🛒</span>

            <span style={{
                backgroundColor: 'red',
                color: 'white',
                borderRadius: '50%',
                padding: '2px 8px',
                fontSize: '12px',
                fontWeight: 'bold'
            }}>
                0 {/* Este número luego será dinámico */}
            </span>
        </div>
    )
}

export default CartWidget
