export default async function(ctx, next) {
    try {
        await next()
    } catch (err) {
        ctx.status = 400
        ctx.body = `Ops: ${err.message}`
        console.log('Error handler:', err.message)
    }   
}