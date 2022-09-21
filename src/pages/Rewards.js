import React, { useState, useEffect } from "react";
import '../App.css';
import { Row, Col, OverlayTrigger, Tooltip, Alert } from "react-bootstrap";
import NewNav from "./components/RepNav";
import Footer from "./components/RepFooter";
import Web3 from "web3";
import web3 from "web3";
import swal from 'sweetalert';
import axios from "axios";
import metalogo from '../pages/metamask.svg';
import TokenContractAbi from '../Contracts/TokenAbi.json';
import AbiToken from '../Contracts/CoinAbi.json';
import {ethers, Contract, BigNumber} from 'ethers';
//import BigNumber from 'ethersproject/BigNumber';


function Rewards() {

  const mintAddress = '0x45dBe2af7b22Aa311405775BAef9b9bdC4a122d1'; //CoinAbi is the abi
  //'0x988eC1a7d0bc9b75BBddD57B7Ba54Bd5561491a8'; //minted wallet
  //'0x45dBe2af7b22Aa311405775BAef9b9bdC4a122d1';
  //"0x02E5C492127B19d4AF1221bf7FE7379a295f155B";
  //'0x3dDC80F21f8B805e5A4D5544a7b9aD947619342A' old & TokenAbi

  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);
  const [account, setAccount] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [isMetaMask, setisMetaMask] = useState();
  const [networkType, setnetworkType] = useState();
  const [refresh, setrefresh]= useState(0);
  const [email, setemail] = useState("");
  const [emailStatus, setemailStatus] = useState("");
  const [tokens, settokens] = useState("");
  const [tamount, settamount] = useState("");
  const [show , setShow] = useState(false);
  const [variant, setvariant] = useState("");
  const [networkId, setnetworkId] = useState("");
  const [transaction, setTransaction] = useState();
  const [tokenContract, setTokencontract] = useState("");
  const [amount, setAmount] = useState(10);
  const [transferTokens, setTransferTokens] = useState(true);
  //const [balanceofuser, setBalanceofuser] = useState();
  const [mintToken, setmintToken] = useState({});
  const [mintAmount, setMintAmount] = useState(1);
  const [recipient, setRecipient] = useState();
  const [TokenTransfer, setTokenTransfer] = useState();
  const [SafeCoin,setSafeCoin] = useState();
  const [balanceofuser, setBalanceofuser] = useState();
  const [balanceOfUserWei,setBalanceOfUserWei] = useState();



  if(window.ethereum){
    window.ethereum.on('accountsChanged', (accounts) => {
      check();
    });

    window.ethereum.on('chainIdChanged', (chainId) => {
      check();
    });
  }

  const loadWeb3 = () => {//checking the user's browser has web3 support
    if (typeof window.ethereum !== 'undefined') {
        window.ethereum.request({ method: 'eth_requestAccounts' }).then(
            (response) => {
                swal({
                    title: "Connected to MetaMask!",
                    text: "Successfully connected",
                    icon: "success",
                });
                setisMetaMask(true);
            }
        ).catch(
            (err) => {
                swal({
                    title: "Not Connected to MetaMask!",
                    text: err.message,
                    icon: "warning",
                });
                setisMetaMask(false);
            }
        )
    }else {
        swal({
        title: "Non ethereum browser detected!",
        text: "Please Install Metamask to Continue",
        icon: "warning",
        buttons: true,
        });
        setisMetaMask(false)
    }
  }

  const check = async () =>{//to check the network with account
    if(isMetaMask === true){
        setisMetaMask(true);
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0){
            const networkType = await web3.eth.net.getNetworkType();
            const NType = networkType.toUpperCase();
            setnetworkType(NType);
            setAccount(accounts[0]);
        }else{
            setAccount("Not Connected");
            setisMetaMask(false);
        }

    }
  }

  useEffect(() => {
      check();
      if(refresh === 1) {
          setrefresh(0);
      }
  }, [refresh, isMetaMask]);

  useEffect(() => {
      localStorage.setItem('isMetaMask', isMetaMask)
  },[isMetaMask]);

  useEffect(() => {
    const pro =  () => {
          // const provider = await detectEthereumProvider();
        if (window.ethereum) {

        } else {
            swal({
                title: "Non ethereum browser detected!",
                text: "Please Install Metamask to Continue",
                icon: "warning",
                closeOnClickOutside: false,
                buttons: "Continue",
            }).then(() => {
                window.open('https://metamask.io/download','_blank');
            });
            return;
        }
    }
    pro();
  },[]);

  const loadBlockchainData = async () => {//load blockchain smart contract & its functions
                                                                           
    setLoading(true);
    if(
      typeof window.ethereum === "undifined"
    ) {
      return;
    }
    const web3 = new Web3(window.ethereum);



    const accounts = await web3.eth.getAccounts();

    if(accounts.length === 0) {
      return;
    }
    setAccount(accounts[0]);
    const networkId = await web3.eth.net.getId();

    if(networkId === 3) {

      const tokenContract = new web3.eth.Contract(TokenContractAbi.abi,'0x3dDC80F21f8B805e5A4D5544a7b9aD947619342A' );//call smart contract through abi and conreact address
      //'0xC194B38c5d16dfef10e2b1819efFd07F1a50f526'
      console.log(tokenContract);

      const tokenName = await tokenContract.methods.name().call();
      console.log(tokenName);

      const symbol = await tokenContract.methods.symbol().call();
      console.log(symbol)

      const totalSupplyofToken = await tokenContract.methods.totalSupply().call();
      console.log(totalSupplyofToken);

      const totalsupplyoftokendecimals = await web3.utils.fromWei(totalSupplyofToken, 'ether');
      console.log(totalsupplyoftokendecimals);

      const balanceofuser = await tokenContract.methods.balanceOf(accounts[0]);
      setBalanceofuser(balanceofuser)

      const decimals = web3.utils.toBN(18);

      const balanceOfUserwei = await web3.utils.toBN(10).pow(decimals).toString();
      setBalanceOfUserWei(balanceOfUserWei);

      // const mintToken = await tokenContract.methods.transfer(accounts[0], tamount).send({from: mintAddress}).then(
      //   (response) => {
      //     console.log(response);
      //     if(!response.err){
      //       swal({
      //           title: "Transaction Incomplete!",
      //           text: response.err,
      //           icon: "warning",
      //         });
      //     }else {
      //       swal({
      //           title: "Transaction Complete!",
      //           text: response.message,
      //           icon: "success",
      //         });
      //     }
      //   }
      // ).catch(
      //   (err) => {
      //       swal({
      //          title: "Transaction Incomplete!",
      //          text: err.message +", this could also be due to insufficient funds or network congestions. Please resubmit the transaction.",
      //          icon: "warning",
      //       });
      //   }
      // )

      setLoading(false);
    }else{
      swal({
        title: "Warning!",
        text: "The contract has not deployed to detected network",
        icon: "warning"
      });
    }
  }

  const [balance, setBalance] = useState()
  const [showBalance, setShowBalance] = useState(false)

  async function getBalance() {//cheching user account balance
    if (typeof window.ethereum !== 'undefined') {
      const [account] = await window.ethereum.request({method: 'eth_requestAccounts'});
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(mintAddress, AbiToken.abi, provider);
      const balance = await contract.balanceOf(account[0]);
      console.log("Balance: ", balance.toString());
      setBalance(balance.toString());
      setShowBalance(true);
    }
  }

  async function transfer() {
    if (typeof window.ethereum !== 'undefined') {
      const account = await window.ethereum.request({ method: 'eth_requestAccounts'});
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const decimals = 18;
      const tamount = 10;
      const amount = BigNumber.from(tamount).mul(BigNumber.from(10).pow(decimals));
      const contract = new ethers.Contract(mintAddress,AbiToken.abi, signer);
      contract.transfer(account[0], amount).then(
        (result) =>{
          console.log(result);
        }
      ).catch(
        (err) => {
          console.log(err);
        }
      )
    }
  }


  useEffect(() => {
    loadWeb3();
    loadBlockchainData();

    if (refresh === 1) {
      setrefresh(0);
      loadBlockchainData();

    }
  }, [refresh]);


  useEffect(() => {
    const formdata = window.localStorage.getItem('complaint-data');
    const savedValues = (JSON.parse(formdata));
    if(savedValues){
        setemail(savedValues.email);
    }
  }, []);

  useEffect(() => {
      const formValues = {email, tamount}
      window.localStorage.setItem('complaint-data', JSON.stringify(formValues));
  });


  const verifyEmail = e => {
    e.preventDefault(); ;
    const data ={
        email : email
    };
    axios.post('http://localhost:3001/email', data).then(
      (response) => {
          console.log(response);
          if(!response.err){
              if(response.data.err){
                setemailStatus(response.data.err.sqlMessage);
                setvariant("danger");
                setShow(false);
              }else {
                const tokens = response.data.tokens;
                settokens(tokens)
                console.log(tokens);
                if (response.data.message){
                  setemailStatus(response.data.message);
                  setvariant("danger");
                  setShow(false);
                }else if(tokens <0.2 && tokens >0){
                  setemailStatus("The Amount of token is not sufficient to withdraw, Your Current Balance of Token is "+tokens+" tokens");

                  // setemailStatus("The Amount of token is not sufficient to withdraw, Your Current Balance "+balanceofuser+" is "+tokens+" tokens");
                  setvariant("warning");
                  setShow(false);
                } else if(tokens >= 0.2){
                  setemailStatus("Email verified successfully, Your Current Balance is "+tokens+" Tokens");
                  setvariant("success");
                  setShow(true);
                }
              }
          } else {
            setemailStatus(response.data.err);
            setvariant("danger");
            setShow(false);
          }
      }
    ).catch(
      (err) => {
      console.log(err);
      }
    )
  }

  const withdrawTokens = (e) => {
    e.preventDefault();
    if ( tokens - tamount <= 0.2){
      setemailStatus("A minimum of 0.2 Token must remain as balance after redeeming, Your current balance is "+tokens+" tokens");
      setvariant("danger");
      setShow(true);
      return;
    }
    const data ={
        email : email,
        tamount : tamount
    };
    axios.post('http://localhost:3001/withdraw', data).then(
      (response) => {
        console.log(response);
        if(!response.err){
            if(response.data.err){
              setemailStatus(response.data.err.sqlMessage);
              setvariant("danger");
              setShow(false);
            } else {
              localStorage.clear();
              setemail("");
              settamount();
              setemailStatus(response.data.message);
              setvariant("success");
              setShow(false);
            }
        } else {
          setemailStatus(response.data.err);
          setvariant("danger");
          setShow(false);
        }
      }
    ).catch(
        (err) => {
        console.log(err);
        }
    )
  }

  // const [txs, setTxs] = useState([]);
  // const [contractInfo, setContractInfo] = useState({
  //   address: "-",
  //   nameOfToken: "-",
  //   symbolOfToken: "-",
  //   totalSupply: "-"
  // });
  //
  // const [balanceofuser, setBalanceofuser] = useState ({
  //   address: "-",
  //   balance: "-"
  // });
  //
  // const handleContract = async (e) => {
  //   e.preventDefault();
  //   const formdata = new FormData();
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //
  //   const erc20 = new ethers.Contract(formdata.get("addr"), TokenContractAbi, provider);
  //   const tokenName = await erc20.name();
  //   const symbolOfToken = await erc20.symbol();
  //   const totalSupply = await erc20.totalSupply();
  //
  //   setContractInfo({
  //     address: formdata.get("addr"),
  //     tokenName,
  //     symbolOfToken,
  //     totalSupply
  //   });
  // };
  //
  // const getBalance = async () => {
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   await provider.send("eth_requestAccounts", []);
  //   const erc20 = new ethers.Contract('0x3dDC80F21f8B805e5A4D5544a7b9aD947619342A', TokenContractAbi, provider);
  //   const signer = await signer.getSigner();
  //   const signerAddress = await signer.getAddress();
  //   const balance = await erc20.balanceOf(signerAddress);
  //
  //   setBalanceofuser({
  //     address: signerAddress,
  //     balance: String(balance)
  //   });
  // };
  //
  // const handleMint = async (e) => {
  //   e.preventDefault();
  //   const formdata = {'amount': tamount, 'recipient': accounts[0] }
  //   const provider= new ethers.providers.Web3Provider(window.ethereum);
  //   await provider.send("eth_requestAccounts", []);
  //   const signer = await provider.getSigner();
  //   const erc20 = new ethers.Contract('0x3dDC80F21f8B805e5A4D5544a7b9aD947619342A',TokenContractAbi, signer);
  //   await erc20.handleMint(formdata.recipient,formdata.amount);
  // };
  //
  // useEffect(() => {
  //   if (contractInfo.address !== "-"){
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const erc20 = new ethers.Contract(
  //       contractInfo.address,
  //       TokenContractAbi,
  //       provider
  //     );
  //
  //     erc20.on("handleMint", (sender, recipient, amount, event) => {
  //       console.log({sender, recipient, amount, event});
  //
  //       setTxs((currentTxs) => [
  //         ...currentTxs,
  //         {
  //           txHas: event.transactionHash,
  //           recipient,
  //           amount: String(amount)
  //         }
  //       ]);
  //     })
  //   }
  // }, [contractInfo.address]);


  // const async mintToken(tokenName, symbol, decimals, mintAddress) => {
  //   return new Promise((accept, reject) => {
  //     getBalance(mintAddress).then(balanceofuser => {
  //       if(balanceofuser == 0.02 > 0) {
  //         let tokenContract ? TokenContractAbi;
  //         instantiateContract(tokenContract, mintAddress).then(txHash =>{
  //           accept(txHash);
  //           return;
  //         }).catch((e) => {
  //           reject(new Error("Can't create contract"));
  //           return ;
  //         });
  //       } else {
  //         reject(new Error("Account :" + account[0] + "doesn't have enough funds"));
  //         return ;
  //       }
  //     }).catch((e) => {
  //       reject(new Error("could not check the balance of user"));
  //       return ;
  //     });
  //   });
  // }



  return (
    <>
    <div className="container">
        <Col className="content">
          <NewNav activepath="/foucet" />
            <Row style={{justifyContent:'center'}}>
              <div className="App">
                <div className="row">
                  <div className="text-header pb-5">
                    <div className="text-center text-sm text-black-500 sm:text-center">
                      <div className="meta" to="#"><strong>Account: </strong>{account}
                      {isMetaMask === true ? (
                        <OverlayTrigger
                          key='bottom-1'
                          placement="bottom"
                          overlay={
                            <Tooltip id='tooltip-connected'>
                              <strong>Connected</strong>
                            </Tooltip>
                          }
                        >
                          <button className="conweb"><img className="metalogo" alt="metaMask" src={metalogo}/>{networkType}</button>
                        </OverlayTrigger>
                      ):(
                        <OverlayTrigger
                          key='bottom-2'
                          placement="bottom"
                          overlay={
                            <Tooltip id='tooltip-Notconnected'>
                              <strong>Connect to Metamask</strong>
                            </Tooltip>
                          }
                          >
                            <button className="conweb" onClick={loadWeb3}>CONNECT TO<img className="metalogo" alt="MetaMask" src={metalogo}/></button>
                          </OverlayTrigger>

                        )}
                      </div>
                    </div>
                    <hr />
                    <div className="text-center text-sm text-black-500 py-4 sm:text-center">
                      <h2 className="py-3">Thank you for standing against illegal dumping</h2>
                      <h4 className="py-3">Enter your email address to verify and get your tokens.</h4>
                    </div>

                    <form id="foucetForm" method="POST" onSubmit={withdrawTokens} encType="multipart/form-data">
                        {/* @csrf */}
                        <Alert variant={variant} className="text-center">
                            {emailStatus}
                        </Alert>
                        {show &&
                          <div className="row justify-content-center py-5">
                            <div className="col-sm-7">
                              <h6>Balance: {tokens} Tokens</h6>
                              <input type="tamount" name="tamount" className="form-control" required
                                  onChange={e => {settamount(e.target.value)}} value={tamount} />
                            </div>
                            <div className="col-sm-1 d-flex align-items-end">
                              <button type="submit" className="btn btn-custom-green" id="foucet-token-btn" onClick={transfer}>
                                Redeem
                              </button>
                            </div>
                          </div>
                        }
                        <div className="form-group row">
                          <label htmlFor="recipient-name" className="
                            col-sm-3 col-form-label
                            form-heading
                            text-end
                          ">Your Email</label>
                          <div className="col-sm-7">
                            <input type="email" name="email" className="form-control" required
                              onChange={e => {setemail(e.target.value)}} value={email} />
                          </div>
                        </div>
                        <div className="form-group row">
                            <div className="mb-5 mt-3">
                                <button onClick={verifyEmail} className="btn btn-custom-green d-block m-auto" id="foucet-submit-btn">
                                    SUBMIT
                                </button><br />

                                <button className="btn btn-custom-green d-block m-auto" onClick={transfer}>Send Tokens</button>
                            </div>
                        </div>
                    </form>
                  </div>

                </div>
              </div>
              {/* Content */}

            </Row>
        </Col>
    </div>
   
    <Footer />
    </>
  );
}

export default Rewards;
