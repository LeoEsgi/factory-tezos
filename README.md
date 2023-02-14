# Factory TEZOS
# Version: 0.0.1
# Date: 2023-02-14
# License: MIT

## Tezos Factory

## Descriptif :
Ce projet a pour but de tester les compétences des étudiants de 5ème année pour créer une
application décentralisée sur Tezos.
Modalités :
Ce projet est à rendre individuellement.
Le rendu doit être sous le format d’un repo Github public.
Enoncé:
Le but de ce projet est de créer une dApp Tezos complète agissant comme une factory de NFT FA2.
Le projet doit permettre de :
- Interagir avec les contrats à travers un Makefile à la racine (compiler, tester, déployer),
- Démarrer/Éteindre un noeud Tezos sur Flextesa en local,
- Déployer les smart-contrats sur Flextesa.
Des annexes sont disponibles afin d’aider les étudiants à développer sur Tezos.
Contrat :
Les étudiants doivent livrer 1 contrat unique pour ce TP.
Le contrat doit être codé en CameLIGO et doit être testé et déployé sur Flextesa.
Le contrat sera une factory on-chain de NFT au format FA2, et aura pour fonction de :
- Définir un Administrateur,
- L’Administrateur peut ajouter/supprimer d’autres administrateurs,
- Un nouvel Administrateur doit accepter son rôle avant qu’il ne soit effectif,
- L’Administrateur peut bannir (sur une blacklist) des Creators,
- Un utilisateur peut payer 10 tez pour participer au contrat (sur une whitelist de Creators),
- Un utilisateur whitelisté peut créer des Collections NFTs FA2 en spécifiant les paramètres
nécessaires,
- Une vue qui permettra de retourner les collections créées:
- soit par user,
- soit toutes les collections.


## Annexes :
https://ligolang.org
https://hub.docker.com/r/ligolang/ligo
https://tezos.gitlab.io/flextesa/
https://hub.docker.com/r/oxheadalpha/flextesa
https://tzip.tezosagora.org/proposal/tzip-12/
https://github.com/pewulfman/Tezos-TZIP-implementation





## Tezos

Tezos is a blockchain protocol that supports formal verification of smart contracts. It is a self-amending blockchain protocol that can be upgraded without hard forks. It is a decentralized network of peer-to-peer nodes that can collectively govern itself.

## Tezos Documentation

- [Tezos Documentation](https://tezos.gitlab.io/introduction/index.html)


## Tezos Development

- [Tezos Development](https://tezos.gitlab.io/introduction/howtoget.html)


## Tezos Community

- [Tezos Community](https://tezos.gitlab.io/community/index.html)


## Tezos Governance

- [Tezos Governance](https://tezos.gitlab.io/governance/index.html)


## Tezos Foundation

- [Tezos Foundation](https://tezos.foundation/)



