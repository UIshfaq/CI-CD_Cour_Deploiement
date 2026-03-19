## 🚀 Installation & Démarrage

Suis ces étapes dans l'ordre pour initialiser l'infrastructure.

**1. Créer le réseau global (Important)**
Traefik a besoin d'un réseau commun pour communiquer avec les autres applications que nous déploierons plus tard.
```bash
docker network create web
```

**2. Lancer les containers portainer, trafik, et le docker compose**
```
docker compose -f traefik-docker-compose-light.yml up -d
docker compose -f portainer-docker-compose.yml up -d
docker compose up -d                                    
```
**3. Configurer windows/macsos **
### 🪟 Si tu es sur Windows :
1. Ouvre le menu Démarrer, cherche **Bloc-notes** (Notepad).
2. Fais un **clic droit -> Exécuter en tant qu'administrateur**.
3. Fais *Fichier > Ouvrir* et navigue jusqu'à : `C:\Windows\System32\drivers\etc\`
4. En bas à droite, change "Fichiers texte (*.txt)" par **"Tous les fichiers (*.*)"**.
5. Ouvre le fichier nommé `hosts`.
6. Ajoute la ligne tout en bas, sauvegarde (`Ctrl + S`) et ferme.

### 🍎 Si tu es sur Mac ou Linux :
1. Ouvre ton Terminal.
2. Tape la commande suivante :
   ```bash
   sudo nano /etc/hosts
   ```

et ajouter 
127.0.0.1 app.mon-projet.com 
127.0.0.1 api.app.mon-projet.com
127.0.0.1 traefik.mon-projet.com
127.0.0.1 whoami.mon-projet.com
