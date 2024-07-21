public class NumberThread {
    public static void main(String[] args) {
        // Create and start the NumberRunnable thread
        Thread numberT = new Thread(new NumRun());
        numberT.start();
    }
}

// Runnable to display numbers from 1 to 20
class NumRun implements Runnable {
    @Override
    public void run() {
        for (int i = 1; i <= 20; i++) {
            try {
                System.out.println("Number: " + i);
                Thread.sleep(1000); // Sleep for 5 seconds
            } catch (InterruptedException e) {
                System.err.println("Number thread interrupted");
            }
        }
    }
}