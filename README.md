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




      
