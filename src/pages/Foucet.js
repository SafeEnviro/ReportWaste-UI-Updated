import React, { useState, useEffect } from "react";
import '../App.css';
import { Row, Col, OverlayTrigger, Tooltip, Alert } from "react-bootstrap";
import NewNav from "./components/RepNav";
import Footer from "./components/RepFooter";
import Web3 from "web3";
import swal from 'sweetalert';
import axios from "axios";
import metalogo from '../pages/metamask.svg';
// import TokenContractAbi from '../Contracts/TokenAbi.json';
import TokenContractAbi from '../Contracts/Report.json';

function Foucet() {

  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);
  const [account, setAccount] = useState([]);
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
  const [transferTokens, setTeansferTokens] = useState("");

  if(window.ethereum){
    window.ethereum.on('accountsChanged', (accounts) => {
      check();
    });

    window.ethereum.on('chainIdChanged', (chainId) => {
      check();
    });
  }

  const loadWeb3 = () => {
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

  const check = async () =>{
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

  const loadBlockchainData = async () => {

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
    setAccount(account[0]);
    const networkId = await web3.eth.net.getId();

    if(networkId === 3) {
      
      // const tokenContract = new web3.eth.Contract(TokenContractAbi.abi, '0xC194B38c5d16dfef10e2b1819efFd07F1a50f526');
      const tokenContract = new web3.eth.Contract(TokenContractAbi.abi, '0x64795c01b18dea73808c22a7ca2cafad59a1eeb2');
      console.log(tokenContract);

      const tokenName = await tokenContract.methods.name().call();
      console.log(tokenName);

      const totalSupplyofToken = await tokenContract.methods.totalSupply().call();
      console.log(totalSupplyofToken);

      const totalsupplyoftokendecimals = await web3.utils.fromWei(totalSupplyofToken, 'ether');
      console.log(totalsupplyoftokendecimals);

      const balanceofuser = await tokenContract.methods.balanceOf(accounts[0]);
      console.log(balanceofuser);

      const decimals = web3.utils.toBN(18);

      const balanceofuserwei = await web3.utils.toBN(10).pow(decimals).toString();
      console.log(balanceofuserwei);

      // const tokens = 10;
      // const transferTokens = await tokenContract.methods.mint().send();
      // console.log(transferTokens);
      setLoading(false);
    }else{
      swal({
        title: "Warning!",
        text: "The contract has not deployed to detected network",
        icon: "warning"
      });
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
              }else if(tokens <= 0){
                setemailStatus("You have no tokens to redeem");
                setvariant("danger");
                setShow(false);
              }else if(tokens <0.2 && tokens >0){
                setemailStatus("The Amount of token is not sufficient to withdraw, Your Current Balance is "+tokens+" tokens");
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
    if ( tokens - tamount <= 0.2 ){
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

  // const updateBalance = async () => {
  //   const balanceBigN = await Contracts.balanceOf(defaulAccount);
  //   const balanceNumber = balanceBigN.toNumber();

  //   const tokenBalance = balanceNumber/Math.pow(10, decimals);
  //   setBalance(tokenBalance);
  // }


  // const sendToken = async () =>  {
  //   const web3 = new Web3(window.ethereum);
  //   const T = 10;
  //   const amount = await web3.utils.toWei(T.toString())
  //     await transferTokens
  //     .methods
  //     .mint()
  //     .send({
  //       from: account,
  //       to: account[0],
  //       value: amount,
  //     })
  //     .once("recepient", (recepient) => {
  //       window.alert("sucess")
  //     })
  //     .on("error", () => {
  //       window.alert("error")
  //     });
  // }

  const sendToken = async () =>  {
    const web3 = new Web3(window.ethereum);
    const T = 10;
    const mintAddress = '0xC194B38c5d16dfef10e2b1819efFd07F1a50f526';
    const amount = await web3.utils.toWei(T.toString())
    const transferTokens = await tokenContract.methods
    .mint(account, web3.utils.toWei("10" ,'ether'))
    .send({from: mintAddress})
    .once("recepient", (recepient) => {
      window.alert("success")
    })
    .on("error", () => {
      window.alert("error ")
    });
  }

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
                      <h2 className="py-3">Thank you for stand against illegal dumping</h2>
                      <h4 className="py-3">Enter your email address to verify and get your tokens.</h4>
                    </div>
                    
                    <form id="foucet-form" method="POST" onSubmit={verifyEmail} encType="multipart/form-data">
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
                              <button type="btn" className="btn btn-custom-green" id="foucet-token-btn" onClick={withdrawTokens}>
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
                                <button type="submit" className="btn btn-custom-green d-block m-auto" id="foucet-submit-btn">
                                    SUBMIT
                                </button>
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
    <button className="btn btn-custom-green" onClick={sendToken}>send</button>
    <Footer />
    </>
  );
}

export default Foucet;
