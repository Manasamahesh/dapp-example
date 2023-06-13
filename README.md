# dapp-example

This deployment guide provides a step-by-step procedure for creating a contract in Remix and deploying it to the Ganache developer blockchain using Truffle.
For Deploying and running contract will be using Ganche which is a local developer blockchain environment.

Following are the steps to create and deploy a contract into the Ganche.
* Install ganche from [here](https://trufflesuite.com/ganache/).
* Install truffle from [here](https://trufflesuite.com/docs/truffle/how-to/install/).
* [Remix](https://remix.ethereum.org)
     - create the sample contract in the folder default workspace -> folder(contracts) with extension .sol(eg.calculator.sol,hello.sol)
     - In the file name, add the contract.
     - compile the code by choosing compiler version in the solidity compiler section.Once compiled successfully it generates ABI byte code of the contract.
     - After that in the deploy and run transaction section, select environment as dev- ganche.
         ![Screenshot (1)](https://github.com/Manasamahesh/dapp-example/assets/25504822/d147de82-aba3-46cf-8ae5-5703c4490229)
         
     -  Select account number whichever listed down in the account section for deducting gas value for deploying contract.
            
        ![Screenshot (2)](https://github.com/Manasamahesh/dapp-example/assets/25504822/28be5b94-1a26-404e-ac26-c4016a0e43a5)
        
     -  Now, click the button Deploy for Deploying the contract in to Ganche.
      
         ![Screenshot (3)](https://github.com/Manasamahesh/dapp-example/assets/25504822/f6d4b708-d96e-45cf-8beb-e317d5405957)
         
         ![Screenshot (4)](https://github.com/Manasamahesh/dapp-example/assets/25504822/3bb3d41a-0493-40cf-bcde-5a5e2f2e722f)

     -  Once contract got deployed, we can able to see the deployed contract in the below section.
         
         ![Screenshot (5)](https://github.com/Manasamahesh/dapp-example/assets/25504822/9b98fc06-93f5-4011-aeba-996bddf9ddd1)
         
     -  Test the contract by giving sample data.
      
         ![Screenshot (6)](https://github.com/Manasamahesh/dapp-example/assets/25504822/7bb66121-7166-4d21-8e03-dddbb2ea2325)
 * Truffle :
    - Create the sample contract in the folder(contracts) with extension .sol(eg.calculator.sol,hello.sol)
    - Folder structure to be in the below format:
    
          
         ![image](https://github.com/Manasamahesh/dapp-example/assets/25504822/60d9b1b5-9008-4438-b0cf-50527d733f26)
          
    - In the file name, add the contract.
    - Now, in the terminal run command as `Truffle compile`
    - For deployment migrate scripts to be added in the migrate folder which is a feature provided by the truffle as part of their framework.
    - Create file inside of the folder migrations, where filename should be prefixed with number_deploy_filename.js(eg: 1_deploy_contract.js).
    - Now add local network details in the truffle-config.js for connecting with Ganche blockchain.
          ![image](https://github.com/Manasamahesh/dapp-example/assets/25504822/d0e0169a-54d3-4618-b983-e407392627bd)
    - run command `Truffle Migrate --network development`
          ![image](https://github.com/Manasamahesh/dapp-example/assets/25504822/cf30a79e-1520-4cd4-b809-62a2f5769996)
          
         ![image](https://github.com/Manasamahesh/dapp-example/assets/25504822/ee9bf2e4-5030-476c-a4a6-af4d8fec1bd6)

    - run command `Truffle console` to get interact with deployed contract.
         ![image](https://github.com/Manasamahesh/dapp-example/assets/25504822/33b7642d-22cb-48c4-9d67-a6fb57484ae5)
    - For testing, where deployed contracts are working as expected test cases can be added in to the truffle test folder using mocha and chai.
    - run command `Truffle test` for running the test cases.
            ![image](https://github.com/Manasamahesh/dapp-example/assets/25504822/7a2c859f-e1a0-4230-8fff-8bd4ee5068e3)

    


 




      
