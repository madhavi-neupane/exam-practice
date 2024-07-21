public class MultiThreadedDisplay {
    public static void main(String[] args) {
        // Create and start the NameThread
        Thread nameThread = new Thread(new DisplayNameRunnable());
        nameThread.start();

        // Create and start the AddressThread
        Thread addressThread = new Thread(new DisplayAddressRunnable());
        addressThread.start();
    }
}

// Runnable to display name
class DisplayNameRunnable implements Runnable {
    @Override
    public void run() {
        for (int i = 0; i < 10; i++) {
            try {
                System.out.println("Name: Your Name");
                Thread.sleep(5000); // Sleep for 5 seconds
            } catch (InterruptedException e) {
                System.err.println("Name thread interrupted");
            }
        }
    }
}

// Runnable to display address
class DisplayAddressRunnable implements Runnable {
    @Override
    public void run() {
        for (int i = 0; i < 10; i++) {
            try {
                System.out.println("Address: Your Address");
                Thread.sleep(5000); // Sleep for 5 seconds
            } catch (InterruptedException e) {
                System.err.println("Address thread interrupted");
            }
        }
    }
}