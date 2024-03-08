// Index.tsx
import {
    usePrepareRegistration,
    useRegister,
    useSubscribe,
    useSubscription,
    useUnsubscribe,
    useWeb3InboxAccount,
    useWeb3InboxClient
  } from "@web3inbox/react"
  import { useSignMessage, useAccount } from "wagmi"
  
  import Messages from "./web3messages"
  
  export default function Web3Inbox() {
    // Wagmi Hooks
    const { address } = useAccount()
    const { signMessageAsync } = useSignMessage()
  
    // W3I Hooks
    const { prepareRegistration } = usePrepareRegistration()
    const { register, isLoading: isRegistering } = useRegister()
    const {
      data: w3iClient,
      isLoading: w3iClientIsLoading
    } = useWeb3InboxClient()
    const { isRegistered } = useWeb3InboxAccount(`eip155:1:${address}`)
  
    // Registration of your address to allow notifications
    // This is done via a signature of a message (SIWE) and the
    // signMessageAsync function from wagmi
    const handleRegistration = async () => {
      try {
        const { message, registerParams } = await prepareRegistration()
        const signature = await signMessageAsync({ message: message })
        await register({ registerParams, signature })
      } catch (registerIdentityError) {
        console.error(registerIdentityError)
      }
    }
  
    // Subscription to dapp notifications
    // Subscribe can be called as a function post registration
    // Can be moved above but shown for example clarity
    const { subscribe, isLoading: isSubscribing } = useSubscribe()
    const { unsubscribe, isLoading: isUnsubscribing } = useUnsubscribe()
    const { data: subscription } = useSubscription()
    const isSubscribed = Boolean(subscription)
  
    // Note: We are using Web3Modal for the dapp <> wallet connection.
    // The <w3m-button /> module is from Web3Modal. Check Web3Modal Docs for further info.
    return (
      <>
        <main>
          {w3iClientIsLoading ? (
            <div>Loading W3I Client</div>
          ) : (
            <div>
              <h1>W3I QuickStart</h1>
              <w3m-button />
              <div className="">
                <button onClick={handleRegistration} disabled={isRegistered}>
                  {isRegistered ? "Registered" : "Register"}
                </button>
                <button
                  onClick={isSubscribed ? unsubscribe : subscribe}
                  disabled={isSubscribing || isUnsubscribing}
                >
                  {isSubscribed ? "Unsubscribe" : "Subscribe"}
                </button>
                <hr />
                {isSubscribed ? <Messages /> : null}
              </div>
            </div>
          )}
        </main>
      </>
    )
  }
  