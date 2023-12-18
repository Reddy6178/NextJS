export default function DashboardLayout ({
    children,
    notification,
    revenue,
    users
}:{
    children : React.ReactNode,
    revenue: React.ReactNode,
    notification : React.ReactNode,
    users: React.ReactNode,
}){
    return <div>
        <div>{children}</div>
        <div style={{display:"flex"}}>
            <div style={{display:"flex", flexDirection:"column"}}>
                <div>{users}</div>
                <div>{revenue}</div>
            </div>
            <div style={{display:"flex", flex:1}}> {notification}</div>
        </div>

    </div>
}